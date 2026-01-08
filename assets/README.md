# Moyinolorun Precious Adegbie - Interactive Resume

A modern, interactive resume website built with Flask, featuring animated skill bars, interactive Plotly charts, and a beautiful glassmorphism design.

## 🚀 Features

- **Modern UI Design**: Glassmorphism effects, smooth animations, and responsive layout
- **Dark/Light Mode**: Toggle between themes for comfortable viewing
- **Interactive Charts**: Plotly-powered data visualizations for research projects
- **Tabbed Navigation**: Easy navigation between About, Skills, Experience, Projects, Education, and Contact sections
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Git

## 🛠️ Local Setup & Configuration

### 1. Clone the Repository

```bash
git clone https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
cd <YOUR_REPO_NAME>
```

### 2. Create a Virtual Environment (Recommended)

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate

# On Windows:
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the Application

```bash
python app.py
```

The application will start on `http://127.0.0.1:5000/`

## 📁 Project Structure

```
precious/
├── app.py                 # Flask application entry point
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── static/
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   └── js/
│       └── main.js       # JavaScript functionality
└── templates/
    └── index.html        # Main HTML template
```

## 🚀 Deploying to GitHub

### 1. Create a New Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Enter a repository name (e.g., `interactive-resume`)
5. Choose **Public** or **Private**
6. Do NOT initialize with README (we already have one)
7. Click **Create repository**

### 2. Initialize Git and Push to GitHub

```bash
# Navigate to the project directory
cd /path/to/precious

# Initialize git repository (if not already initialized)
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Interactive resume website"

# Add the remote repository (replace with your GitHub URL)
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Verify Upload

Visit your repository at `https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>` to confirm all files were uploaded successfully.

## 🔧 Configuration Options

### Changing the Port

Edit `app.py` and modify the port number:

```python
if __name__ == "__main__":
    app.run(debug=True, port=8080)  # Change 5000 to your preferred port
```

### Disabling Debug Mode for Production

```python
if __name__ == "__main__":
    app.run(debug=False, port=5000)
```

### Environment Variables (Optional)

For production deployment, you can use environment variables:

```bash
export FLASK_ENV=production
export FLASK_APP=app.py
flask run --host=0.0.0.0 --port=5000
```

## 📝 Customization

### Updating Personal Information

1. Edit `templates/index.html` to update:
   - Name and title in the header
   - About section content
   - Skills and percentages
   - Experience timeline
   - Education details
   - Contact information

2. Update footer social links with your actual profiles:
   - LinkedIn URL
   - GitHub URL
   - Email address

### Modifying Styles

Edit `static/css/style.css` to customize:
- Color schemes (CSS variables in `:root`)
- Fonts
- Spacing
- Animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Moyinolorun Precious Adegbie**
- Geologist & Data Scientist
- Energy Industry Specialist

---

*Built with ❤️ using Flask and modern web technologies*
