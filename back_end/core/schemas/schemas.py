from pydantic import BaseModel


# Схема для создания пользователя
class UserCreate(BaseModel):
    email: str
    password: str


# Схема для токена
class Token(BaseModel):
    access_token: str
    token_type: str


# Схема для данных в токене
class TokenData(BaseModel):
    email: str | None = None
