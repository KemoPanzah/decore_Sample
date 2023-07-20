from decore_base.uniform.conform_model import *
from .person_model import Person_model

import datetime

class Contract_model(Conform_model):
    person = ForeignKeyField(Person_model, backref='contracts', verbose_name='Person')
    position = CharField(verbose_name='Position', choices=['Developer', 'Manager', 'Designer', 'Tester', 'Supporter', 'Salesman'])
    start_date = DateTimeField(verbose_name='Date', default=datetime.date.today)
    end_date = DateTimeField(null=True, verbose_name='Date')
    fixed_term = IntegerField(verbose_name='Deadline', default=0, choices=[0,1,3,5])