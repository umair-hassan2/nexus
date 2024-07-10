import os
from fastapi import Request , FastAPI,status,HTTPException
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import mailtrap as mt
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

class email_template(BaseModel):
    name:str
    email:str
    message:str
    subject:str


templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="./static"), name="static")

@app.get("/")
def read_root(request: Request):
    print("request coming")
    return templates.TemplateResponse("index.html" , {"request": request})

@app.get("/contact" , response_class=HTMLResponse)
def get_contact(request:Request):
    print("contact request coming")
    return templates.TemplateResponse("contact.html" , {"request": request})

@app.get('/plans' , response_class=HTMLResponse)
def get_plans(request:Request):
    print("plans request coming")
    return templates.TemplateResponse("plans.html" , {"request": request})

@app.get('/faq' , response_class=HTMLResponse)
def get_faq(request:Request):
    print("faq request coming")
    return templates.TemplateResponse("FAQ.html" , {"request": request})

@app.get('/privacy-policy' , response_class=HTMLResponse)
def get_privacy(request:Request):
    print("privacy request coming")
    return templates.TemplateResponse("privacy.html" , {"request": request})

@app.get('/spotify-service' , response_class=HTMLResponse)
def get_spotify_service(request:Request):
    print("spotify service request coming")
    return templates.TemplateResponse("spotify.html" , {"request": request})

@app.get('/youtube-service' , response_class=HTMLResponse)
def get_spotify_service(request:Request):
    print("Youtube service request coming")
    return templates.TemplateResponse("youtube.html" , {"request": request})

def send_message(sender_name:str , sender_email:str , message:str , subject:str):
    mail = mt.Mail(
        sender=mt.Address(email=os.getenv("FROM_EMAIL"), name="Nexuss Website Email"),
        to=[mt.Address(email=os.getenv("TO_EMAIL"))],
        subject=subject,
        text=f"Sender Name: {sender_name}\nSender Email: {sender_email}\nMessage: {message}",
        category="Integration Test",
    )

    client = mt.MailtrapClient(token=os.getenv("MAIL_TOKEN"))
    client.send(mail)

@app.post('/handle-email',status_code=status.HTTP_200_OK)
def handle_email(request:email_template):
    print("email request coming")
    try:
        #send_message(request.name , request.email , request.message , request.subject)
        return "OK"
    except Exception as e:
        #for logging
        print(e)
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR , detail="Error in sending email")

