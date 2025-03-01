from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import func, ForeignKey
from datetime import datetime
from back_end.core.models import Base


class Lote(Base):
    id: Mapped[int] = mapped_column(primary_key=True)
    created_at: Mapped[datetime] = mapped_column(
        server_default=func.now(),
        default=datetime.now,
    )
    KCCC_HB: Mapped[int]
    KCCC_patrol: Mapped[int]
    start_volume: Mapped[int]
    available_balance: Mapped[int]
    lot_price: Mapped[int]
    price_per_one_ton: Mapped[int]
