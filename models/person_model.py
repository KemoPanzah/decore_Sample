from decore_base.uniform.conform_model import *
from mimesis import Person
from random import randrange
from peewee import fn

def get_random_age():
    return Person().age(minimum=24, maximum=64)

class Person_model(Conform_model):
    contracts = BackRefMetaField(verbose_name='Contracts')
    first_name = CharField(verbose_name='First name', default=Person().first_name)
    last_name = CharField(verbose_name='Last name', default=Person().last_name)
    age = IntegerField(verbose_name='Age', default=get_random_age)
    academic_degree = CharField(verbose_name='Academic degree', default=Person().academic_degree)
    
    # @Decore_model.user_query()
    # def count_companies(cls, source_query, operator, value):
    #     value = getattr(cls, value)
    #     return_query = (source_query
    #                     .join(cls.companies.through_model.alias())
    #                     .join(cls.companies.rel_model.alias())
    #                     .group_by(cls)
    #                     .having(operator(fn.COUNT(cls.companies.rel_model),value)))
    #     return return_query