from decore_base import decore
from models.sign_dec_user_model import Sign_dec_user_model


@decore.base(title='User', icon='mdi-account', desc='decore Signature Deck - User', model=Sign_dec_user_model)
class Sign_dec_user_base:
    
    @decore.view(parent_id='Sign_dec_base', title='User', icon='mdi-account', desc='User', type='table', fields=Sign_dec_user_model.field_s)
    def sign_dec_user_view():
        pass