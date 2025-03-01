from fastapi import APIRouter
from .authorusation.view import router as router_auth  # Исправленный импорт

router = APIRouter(prefix="/api")
router.include_router(router=router_auth)
