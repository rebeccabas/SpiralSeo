from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
import json
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:5173",
      "https://spiral-seo.vercel.app",
         "https://spiralseo.com",
           "https://www.spiralseo.com"  # Add the URL of your React app here
    # You can also add other origins if needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Get API key from environment variable
api_key = os.getenv("API_KEY")

# Configure the API key
genai.configure(api_key=api_key)

class InputText(BaseModel):
    text: str

def call_generative_model(text):
    # Load the GenerativeModel instance with the desired model
    model = genai.GenerativeModel('gemini-1.0-pro-latest')

    # Define the prompt for model generation
    prompt = "Generate SEO keywords and a SEO Title in this format: {\"keywords\": [\"keyword1\", \"keyword2\", ...], \"title\": \"SEO Title\"} for this text: " + text

    # Generate content using the model and prompt
    response = model.generate_content(prompt)

    # Process and return the generated content
    generated_json = json.loads(response.text)
    return generated_json

@app.post("/generate-seo/")
def generate_seo(input_text: InputText):
    try:
        response = call_generative_model(input_text.text)
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
