from decore_base.uniform.conform_model import *
from .field_model import Field_model

class Mm_br_model(Conform_model):
    manytomany = ManyToManyField(Field_model, backref='mm_backrefs' ,verbose_name='ManyToMany', help_text='A field to store manytomany values')
    options = BooleanField(verbose_name='Options', help_text='A field to store boolean values', default=False)