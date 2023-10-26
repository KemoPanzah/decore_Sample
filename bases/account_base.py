from decore_base import decore
from models.account_model import Account_model as Model

@decore.base(title='Accounts', model=Model, role=10)
class Account_base:
    @decore.view(parent_id='Information_system_base', title='Accounts',icon='mdi-account-circle-outline', type='table', fields=Model.field_s, filters=[Model.password ,Model.person])
    def acc_vi1():
        pass