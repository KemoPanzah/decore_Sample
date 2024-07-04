from decore_base.uniform.conform_model import *
from .beverage_cat_model import Beverage_cat_model
from .beverage_type_model import Beverage_type_model

class Beverage_model(Conform_model):
    beverage_cat = ForeignKeyField(Beverage_cat_model, backref='beverages', verbose_name='Beverage category')
    beverage_type = ForeignKeyField(Beverage_type_model, backref='beverages', verbose_name='Beverage type')