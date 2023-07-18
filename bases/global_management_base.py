from decore_base import decore
from models.person_model import Person_model
from models.account_model import Account_model
from models.company_model import Company_model


from mimesis import Person, Finance
from random import randrange

@decore.base(title='Global Management', icon='mdi-account-supervisor-circle-outline')
class Global_management_base:
    def __init__(self):
        self.test_attr = 'test_attr'
        pass

    @decore.function(type='shot')
    def create_data(self):
        self.test_item()
        # self.query_tester()
        # self.create_company_s()
        # self.create_person_s()
        # self.set_company_person()
    
    def test_item(self):
        t_person = Person_model()
        t_person.id = '0f50b843-1f3c-11ee-9a3a-309c23812330'
        t_person.title = 'Jean Rohark'
        t_person.first_name = 'Jean'
        t_person.last_name = 'Rohark'
        t_person.academic_degree = 'PhD'
        t_person.age = 43
        t_person.capacity = 2
        t_person.save()

        t_company = Company_model()
        t_company.id = '0f50b844-1f3c-11ee-8046-309c23812330'
        t_company.title = 'NetApp'
        t_company.capacity = 16
        t_company.save()

        if not t_person in t_company.persons:
            t_company.persons.add(t_person)

        t_test = list(Person_model.query({'companies__title__eq':'NetApp' ,'count_companies__lt': 'capacity', 'count_companies__gt': 'capacity'}))

        pass

    # Query tester
    def query_tester(self):
        t_item_s = Person_model.query({'companies__title__eq':'NetApp'})
        pass

    # Create 32 companies with capacity 16-128 of persons
    def create_company_s(self):
        while len(Company_model.select()) < 32:
            t_finance = Finance()
            t_item = Company_model()
            t_item.title = t_finance.company()
            t_item.capacity = randrange(16, 128)
            t_item.save()

    # Create 4096 persons with capacity 1-2 of companies
    def create_person_s(self):        
        while len(Person_model.select()) < 32:
            t_item = Person_model()
            t_item.title = t_item.first_name + ' ' + t_item.last_name
            t_item.save()

    # Set persons to companies
    def set_company_person(self):
        for company in Company_model.select():
            while company.persons.count() < company.capacity:
                t_person_num = randrange(Person_model.select().count())
                t_person_item = Person_model.select()[t_person_num]
                if t_person_item.companies.count() < t_person_item.capacity:
                    b_found = False
                    for company_person in company.persons:
                        if t_person_item.id == company_person.id:
                            b_found = True
                    if not b_found:
                        company.persons.add(t_person_item)

    # @decore.function(p_type='init')
    # def create_account_s(self):
    #     for i_person in Person_model.select():
    #         t_person = Person()
    #         t_item = Account_model.get_or_none(Account_model.person == i_person)
    #         if not t_item:
    #             t_item = Account_model()
    #             t_item.id = t_item.create_uuid()
    #             t_item.person = i_person
    #             t_item.email = t_person.email()
    #             t_item.title = t_item.email
    #             t_item.password = t_person.password()
    #             t_item.save()