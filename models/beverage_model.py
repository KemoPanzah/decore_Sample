from decore_base.uniform.conform_model import *
from .beverage_cat_model import Beverage_cat_model
from .beverage_type_model import Beverage_type_model

class Beverage_model(Conform_model):
    bevarage_cat = ForeignKeyField(Beverage_cat_model, backref='bevarages', verbose_name='Beverage category')
    bevarage_type = ForeignKeyField(Beverage_type_model, backref='bevarages', verbose_name='Beverage type')