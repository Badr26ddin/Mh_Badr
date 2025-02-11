from instagrapi import Client
import os

try:
    with open('credentials.txt', 'r') as f:
        username, password = f.read().splitlines()
except FileNotFoundError:
    print("The credentials.txt file was not found.")
    username = input("Enter your Istagram username:")
    password = input("Enter your instagram password:")
    with open('credentials.txt', 'w') as f:
        f.write(f"{username}\n{password}")
        
client = Client()
client.login(username, password)

hashtag = "programming"

medias = client.hashtag_medias_recent(hashtag, 20)

for i, media in enumerate(medias):
    client.media_like(media.id)
    print(f"Liked post number {i+1} of hashtag {hashtag}")