import requests
import base64

token = 'token goes here' # 70 character long user authentification token of mixed characters
userId = 'user-id goes here' # 18 character long user id of only numbers

status = 'this is cool'

hexLength = chr(len(status))
hexPlus2 = chr(len(status)+2)
hexPlus15 = chr(len(status)+15)

data = {'settings': base64.b64encode(('Z'+hexPlus15+'\n\x05\n\x03dnd\x12'+hexPlus2+'\n'+hexLength+''+status+'\x1A\x02\b\x01').encode()).decode('utf-8')}

headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.6',
    'Content-Type': 'application/json',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
    'Authorization': token,
    'Origin': 'https://discord.com',
    'Referer': 'https://discord.com/channels/@me/'+userId,
    'Sec-GPC': '1',
}

r = requests.patch('https://discordapp.com/api/v9/users/@me/settings-proto/1', json=data, headers=headers)

print(r)