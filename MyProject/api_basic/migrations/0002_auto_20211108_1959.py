# Generated by Django 3.2.8 on 2021-11-08 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_basic', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pdf',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=1000)),
            ],
        ),
        migrations.AlterField(
            model_name='video',
            name='url',
            field=models.CharField(max_length=1000),
        ),
    ]
