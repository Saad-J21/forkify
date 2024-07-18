import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found! please recheck your query.';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(boomark => previewView.render(boomark, false))
      .join('');
  }
}
export default new ResultsView();
