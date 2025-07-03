import { useState, useEffect } from 'react';
import type { bar, CreateBarRequest } from './types/Bar';
import { barService } from './services/BarService';
import { BarList } from './components/BarList';
import { BarForm } from './components/BarForm';
import './App.css';

function App() {
  const [bars, setBars] = useState<bar[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingBar, setEditingBar] = useState<bar | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBars();
  }, []);

  const loadBars = async () => {
    try {
      setLoading(true);
      setError(null);
      const barsData = await barService.getAllBar();
      setBars(barsData);
    } catch (err) {
      setError('Error al cargar los bares');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBar = async (barData: CreateBarRequest) => {
    try {
      setLoading(true);
      setError(null);
      const newBar = await barService.createBar(barData);
      setBars(prev => [newBar, ...prev]);
    } catch (err) {
      setError('Error al crear el bar');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateBar = async (barData: CreateBarRequest) => {
    if (!editingBar) return;
    try {
      setLoading(true);
      setError(null);
      const updatedBar = await barService.updateBar(editingBar.id.toString(), barData);
      setBars(prev =>
        prev.map(bar =>
          bar.id === editingBar.id ? updatedBar : bar
        )
      );
      setEditingBar(null);
    } catch (err) {
      setError('Error al actualizar el bar');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBar = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este bar?')) {
      return;
    }
    try {
      setLoading(true);
      setError(null);
      await barService.deleteBar(id.toString());
      setBars(prev => prev.filter(bar => bar.id !== id));
    } catch (err) {
      setError('Error al eliminar el bar');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditBar = (bar: bar) => {
    setEditingBar(bar);
  };

  const handleCancelForm = () => {
    setEditingBar(null);
  };

  const handleSubmitForm = (barData: CreateBarRequest) => {
    if (editingBar) {
      handleUpdateBar(barData);
    } else {
      handleCreateBar(barData);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Gestor de Bares</h1>
        <div className="header-info">
          <span className="bars-count">
            {bars.length} bar{bars.length !== 1 ? 'es' : ''} registrado{bars.length !== 1 ? 's' : ''}
          </span>
        </div>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            {error}
            <button onClick={() => setError(null)} className="error-close">×</button>
          </div>
        )}

        <div className="crud-container">
          <div className="form-section">
            <BarForm
              bar={editingBar}
              onSubmit={handleSubmitForm}
              onCancel={handleCancelForm}
              loading={loading}
            />
          </div>
          
          <div className="list-section">
            <BarList
              bars={bars}
              onEdit={handleEditBar}
              onDelete={handleDeleteBar}
              loading={loading}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;