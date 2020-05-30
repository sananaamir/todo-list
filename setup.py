from setuptools import setup

setup(
    name='todo-list',
    packages=['todolist'],
    include_package_data=True,
    install_requires=[
        'flask',
    ],
)