# Workers del sistema

Procesos encargados de ejecutar tareas pesadas, especialmente el entrenamiento de modelos.

## Funciones principales

- recibir trabajos programados
- preparar ambiente de entrenamiento
- ejecutar TensorFlow/Keras
- registrar métricas
- publicar eventos de progreso
- actualizar estados del trabajo

## Componentes base

- cola de trabajos
- tareas de entrenamiento
- gestor de estados
- capturador de métricas
- eventos del sistema
