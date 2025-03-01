from .base import Base
from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
    id: Mapped[int] = mapped_column(primary_key=True)
    email: Mapped[str]
    hassed_password: Mapped[str]
