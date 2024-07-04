from decore_base.uniform.conform_model import *

from .beverage_cat_model import Beverage_cat_model

class Beverage_type_model(Conform_model):
    beverage_cat = ForeignKeyField(Beverage_cat_model, backref='beverage_types', verbose_name='Beverage category')