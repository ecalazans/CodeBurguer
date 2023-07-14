// resposabilidade desse arq. é fazer a porta ser ouvida, incicializando o app
import app from './app';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀✨ Server is running on PORT: ${PORT}`);
});
