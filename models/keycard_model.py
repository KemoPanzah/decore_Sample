from decore_base.uniform.conform_model import *
from models.person_model import Person_model

class Keycard_model(Conform_model):
    person = ForeignKeyField(Person_model, verbose_name='Person', backref='keycards')
    master = BooleanField(verbose_name='Masterkey', default=False)