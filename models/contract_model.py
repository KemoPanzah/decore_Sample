from decore_base.uniform.conform_model import *
from .person_model import Person_model

import datetime

class Contract_model(Conform_model):
    person = ForeignKeyField(Person_model, backref='contracts', verbose_name='Person')
    position = CharField(verbose_name='Position', default='Developer', choices={'Developer':'Developer','Designer':'Designer','Manager':'Manager','Salesman':'Salesman'})
    start_date = DateField(verbose_name='Start date', default=datetime.date.today)
    end_date = DateField(null=True, verbose_name='End date')
    fixed_term = IntegerField(verbose_name='Deadline', default=0, choices={'Infinite': 0,'1 Year': 1, '2 Years': 2, '3 Years': 3, '4 Years': 4, '5 Years': 5})