# Generated by Django 3.2.16 on 2023-01-06 19:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='followers',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='timestamp',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='updated',
        ),
    ]
