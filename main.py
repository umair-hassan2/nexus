from fastapi import Request , FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import mailtrap as mt

app = FastAPI()


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

def send_message():
    mail = mt.Mail(
        sender=mt.Address(email="mailtrap@demomailtrap.com", name="Mailtrap Test"),
        to=[mt.Address(email="nexussmailing@gmail.com")],
        subject="You are awesome!",
        text="Congrats for sending test email with Mailtrap!",
        category="Integration Test",
    )

    client = mt.MailtrapClient(token="db6444aa41e41fb646aff56e5fd42322")
    client.send(mail)

# @app.post('/send-email')
# def send_email(request:Request):
#     send_message()
#     return {'message':'email send '}

