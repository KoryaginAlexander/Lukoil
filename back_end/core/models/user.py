from .base import Base
from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
    id: Mapped[str] = mapped_column(primary_key=True)
    email: Mapped[str]
