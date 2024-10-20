import { marked } from 'marked';

const markdownCache = {};

export const fetchMarkdown = async (filePath) => {
    if(markdownCache[filePath]){
        return markdownCache[filePath];
    }

    try{
        const response = await fetch(filePath);

        if(!response.ok){
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const text = await response.text();
        const parsedMarkdown = parseMarkdown(text);

        markdownCache[filePath] = parsedMarkdown;
    } catch(error){
        console.error('Error fetching markdown file:', error);
        return null;
    }
}

const parseMarkdown = (markdown) => {
    const lines = markdown.split('\n');
    return lines
        .filter(line => line.trim().length > 0) 
        .map(line => marked(line.trim())) 
        .join(''); 
};