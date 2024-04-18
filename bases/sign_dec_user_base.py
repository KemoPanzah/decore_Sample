from decore_base import decore
from models.sign_dec_user_model import Sign_dec_user_model

from decore_base.library.powershell3 import PS_session

@decore.base(title='User', icon='mdi-account', desc='decore Signature Deck - User', model=Sign_dec_user_model)
class Sign_dec_user_base:
    ps_session = PS_session()
    
    @decore.view(parent_id='Sign_dec_base', title='User', icon='mdi-account', desc='User', type='table', fields=Sign_dec_user_model.field_s)
    def sign_dec_user_view():
        
        @decore.action(title='Get Users', icon='mdi-sync', type='standard', activator='default')
        def sign_dec_user_view_ac1(self, **kwargs):
            t_session: PS_session = self.ps_session
            t_test = t_session.cmd('Connect-ExchangeOnline', ShowBanner=False).exe()
            return True, 'All Users Loaded'