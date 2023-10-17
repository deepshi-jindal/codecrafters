import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

# Load your dataset (replace 'your_dataset.csv' with the actual dataset file)
data = pd.read_csv('website\frontend\src\page\vegetable.json')

# Extract relevant columns (you may need to adjust this based on your dataset)
data = data[['Date', 'Location', 'Vegetable', 'Price per kg']]

# Convert the 'Date' column to datetime
data['Date'] = pd.to_datetime(data['Date'])

# Sort the data by date
data = data.sort_values(by='Date')

# Pivot the table to create a time series dataset
data = data.pivot_table(index='Date', columns=['Location', 'Vegetable'], values='Price per kg')

# Fill missing values (you may want to use a more sophisticated imputation method)
data = data.fillna(method='ffill')

# Convert the data to a numpy array
data = data.values

# Split the data into training and testing sets
train_data, test_data = train_test_split(data, test_size=0.2, shuffle=False)

# Normalize the data (scaling between 0 and 1)
scaler = MinMaxScaler()
train_data = scaler.fit_transform(train_data)
test_data = scaler.transform(test_data)

# Define a function to create sequences for input data
def create_sequences(data, seq_length):
    sequences = []
    for i in range(len(data) - seq_length):
        seq = data[i:i+seq_length]
        target = data[i+seq_length]
        sequences.append((seq, target))
    return np.array(sequences)

# Define the sequence length (adjust as needed)
seq_length = 10

# Create sequences for training and testing data
train_sequences = create_sequences(train_data, seq_length)
test_sequences = create_sequences(test_data, seq_length)

# Split sequences into inputs and targets
X_train = train_sequences[:, :-1]
y_train = train_sequences[:, -1]
X_test = test_sequences[:, :-1]
y_test = test_sequences[:, -1]

# Define the LSTM model
model = keras.Sequential([
    layers.LSTM(units=50, activation='relu', input_shape=(X_train.shape[1], X_train.shape[2])),
    layers.Dense(units=1)  # Output layer
])

# Compile the model
model.compile(optimizer='adam', loss='mse')  # Mean Squared Error for regression

# Train the model
model.fit(X_train, y_train, epochs=50, batch_size=16, verbose=2)

# Evaluate the model on the test data
test_loss = model.evaluate(X_test, y_test, verbose=0)
print(f'Test Loss: {test_loss}')

# Make predictions on the test data
predictions = model.predict(X_test)

# Inverse transform the scaled predictions to get actual prices
predictions = scaler.inverse_transform(np.concatenate((X_test, predictions), axis=1))[:, -1]

# Print sample predictions (adjust as needed)
for i in range(10):
    print(f"Predicted Price: {predictions[i]:.2f}")
