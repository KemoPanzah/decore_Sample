from decore_base import decore
from decore_base.library.powershell.powershell import Ps_process, PS_command

@decore.base(title='Sign.dec', icon='mdi-sign-caution', desc='decore Base | Signature Dashboard')
class Sign_dec_base:
    ps = Ps_process()

    @decore.action(parent_id='sign_dec_user_view', title='Connect EXO', icon='mdi-connection', desc='Connect to Exchange Online', activator='default')
    def sign_dec_user_view_ac1(self, **kwargs):
        t_cmd = PS_command('Connect-ExchangeOnline')
        t_result = self.ps.execute(t_cmd)
        if t_result.success:
            return True, 'Connected to Exchange Online'
        else:
            return False, t_result.result
        
    @decore.action(parent_id='sign_dec_user_view', title='Sync user', icon='mdi-sync', desc='Synchronize online user', activator='default')
    def sign_dec_user_view_ac2(self, **kwargs):
        t_cmd = PS_command('Get-User').cmd('Select-Object', Property=['UserPrincipalName','DisplayName', 'RecipientType'])
        t_result = self.ps.execute(t_cmd)
        if t_result.success:
            return True, t_result.result
        else:
            return False, t_result.result