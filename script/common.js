const codeEditorElement = document.getElementById('codeEditor');
const outputBlock = document.getElementById('outputBlock');
const fileNameDisplay = document.getElementById('fileName');
const themeBtn = document.getElementById('theme-btn');
const copyBtn = document.getElementById('copy-btn');
const themes = ['dracula', 'monokai'];
let currentThemeIndex = 0;
let editor;
let currentCodeFiles;
let currentOutputData;

// Function to initialize the editor with specific data
function initEditor(codeFiles, outputData) {
    currentCodeFiles = codeFiles;
    currentOutputData = outputData;

    // Initialize CodeMirror instance
    editor = CodeMirror.fromTextArea(codeEditorElement, {
        lineNumbers: true,
        mode: "text/x-java",
        theme: themes[currentThemeIndex],
        matchBrackets: true,
        autoCloseBrackets: true
    });
}

// Global functions for user actions
function showCode(fileKey, element) {
    editor.setValue(currentCodeFiles[fileKey]);
    fileNameDisplay.textContent = element.textContent;

    // Update active button state
    document.querySelectorAll('.file-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

function runCode() {
    const activeFileKey = fileNameDisplay.textContent.replace('.java', '');
    if (currentOutputData[activeFileKey]) {
        outputBlock.textContent = currentOutputData[activeFileKey];
    } else {
        outputBlock.textContent = "// No pre-defined output for this file.";
    }
}

function toggleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    editor.setOption("theme", themes[currentThemeIndex]);
    if (themes[currentThemeIndex] === 'dracula') {
        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.add('fa-moon');
    } else {
        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');
    }
}

function copyCode() {
    const code = editor.getValue();
    navigator.clipboard.writeText(code).then(() => {
        // Change icon to a checkmark for feedback
        copyBtn.classList.remove('fa-copy');
        copyBtn.classList.add('fa-check');
        alert('Code copied to clipboard successfully!');

        setTimeout(() => {
            copyBtn.classList.remove('fa-check');
            copyBtn.classList.add('fa-copy');
        }, 1000); // Revert after 1 second
    }).catch(err => {
        console.error('Failed to copy code: ', err);
        alert('Failed to copy code to clipboard.');
    });
}


const downloadCode = () => {
    const codeContent = editor.getValue();
    const fileName = document.getElementById('fileName').textContent;

    const blob = new Blob([codeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('File downloaded successfully!');
};