from decore_base.uniform.conform_model import *

class Mm_model(Conform_model):
    options = BooleanField(verbose_name='Options', help_text='A field to store boolean values', default=False)