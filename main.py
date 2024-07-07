from fastapi import Request , FastAPI
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

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

