# from typing import TYPE_CHECKING

# from sqlalchemy import ForeignKey, UniqueConstraint
# from sqlalchemy.orm import Mapped, mapped_column, relationship

# from .base import Base


# class OrderLoteAssociation(Base):
#     __tablename__ = "order_lote_association"
#     __table_args__ = (
#         UniqueConstraint(
#             "order_id",
#             "lote_id",
#             name="idx_unique_order_lote",
#         ),
#     )

#     id: Mapped[int] = mapped_column(primary_key=True)
#     order_id: Mapped[int] = mapped_column(ForeignKey("orders.id"))
#     product_id: Mapped[int] = mapped_column(ForeignKey("lote.id"))
#     count: Mapped[int] = mapped_column(default=1, server_default="1")
#     unit_price: Mapped[int] = mapped_column(default=0, server_default="0")

#     # association between Assocation -> Order
#     order: Mapped["Order"] = relationship(
#         back_populates="products_details",
#     )
#     # association between Assocation -> Product
#     product: Mapped["Product"] = relationship(
#         back_populates="orders_details",
#     )
