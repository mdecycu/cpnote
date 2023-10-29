from waitress import serve
import wsgi

serve(wsgi.app, listen='127.0.0.1:9800', threads=8)
