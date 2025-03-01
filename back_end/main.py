import sys
from pathlib import Path
import uvicorn


from fastapi import FastAPI

# from api import router  # Импортируем router из api/__init__.py

# Создаем экземпляр FastAPI
app = FastAPI()

# Подключаем роутер
# app.include_router(router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the Fuel Lots API!"}


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
