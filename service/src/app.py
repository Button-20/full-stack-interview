from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes.route import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(router)

# TODO: implement the needed endpoints, interacting as needed with the database
# NOTE: this file imports FastAPI, but you can use Flask if you prefer

