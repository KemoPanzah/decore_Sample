from decore_base.uniform.conform_model import *
from .field_model import Field_model

class Fk_br_model(Conform_model):
    foreignkey = ForeignKeyField(Field_model, backref='fk_backrefs',null=True ,verbose_name='ForeignKey', help_text='A field to store foreignkey')
    options = BooleanField(verbose_name='Options', help_text='A field to store boolean values', default=False)