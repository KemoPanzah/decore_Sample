from decore_base.uniform.conform_model import *
from .test_model import Test_model

class Test_manytomany_backref_model(Conform_model):
    manytomanyfield = ManyToManyField(Test_model, backref='manytomanybackreffield' ,verbose_name='ManyToManyField', help_text='A field to store manytomany values')
    options = BooleanField(verbose_name='Options', help_text='A field to store boolean values', default=False)