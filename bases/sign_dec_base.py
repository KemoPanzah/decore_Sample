from decore_base import decore
from decore_base.library.powershell.powershell import Ps_process, PS_command


@decore.base(title='Sign.dec', icon='mdi-sign-caution', desc='decore Base | Signature Dashboard')
class Sign_dec_base:
    ps = Ps_process()

    @decore.hook()
    def sign_dec_base_ho0(self, pool, route, **kwargs):
        pool['sign_dec_vi0_di0'].title = 'Connect to Exchange Online jetzt erst recht'
        route.path = '/Sign_dec_base/sign_dec_vi0'

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
        t_cmd = PS_command('Get-User').cmd('Select-Object',
                                           Property=['UserPrincipalName', 'DisplayName', 'RecipientType'])
        t_result = self.ps.execute(t_cmd)
        if t_result.success:
            return True, t_result.result
        else:
            return False, t_result.result

    @decore.view(title='Connect to EXO', icon='mdi-connection', desc='Connect to Exchange Online', type='blank', hide=True)
    def sign_dec_vi0():

        @decore.dialog(title='Connect to Exchange Online', icon='mdi-test-tube', desc='Template test')
        def sign_dec_vi0_di0():

            @decore.widget(type='default')
            def sign_dec_vi0_di0_wi0():

                @decore.template()
                def sign_dec_vi0_te0(self, user, **kwargs):
                    t = '''
                    <p> Exchange Online ist nicht verbunden </p>
                    '''
                    return t, {}
