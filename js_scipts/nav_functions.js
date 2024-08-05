document.querySelectorAll('#main-nav .nav-item').forEach(item => {
    // Store the original text and HTML (including the icon) in data attributes
    item.dataset.originalText = item.textContent.trim();
    item.dataset.originalHTML = item.innerHTML;

    // Function to transform text
    function transformText(text) {
        return text
            .replace(/H0M3/g, 'HOME')
            .replace(/PR0J3CT5/g, 'PROJECTS')
            .replace(/5K1LL5/g, 'SKILLS')
            .replace(/C0NT4CT/g, 'CONTACT');
    }

    // Handle mouseover event
    item.addEventListener('mouseover', () => {
        if (!item.classList.contains('active')) {
            const iconHTML = item.querySelector('i')?.outerHTML || ''; // Preserve the icon HTML
            const transformedText = transformText(item.dataset.originalText);
            item.innerHTML = `${iconHTML}${transformedText}`; // Set the transformed text with the icon, no space
        }
    });

    // Handle mouseout event
    item.addEventListener('mouseout', () => {
        if (!item.classList.contains('active')) {
            item.innerHTML = item.dataset.originalHTML; // Restore original HTML including the icon
        }
    });

    // Handle click event
    item.addEventListener('click', () => {
        // Remove 'active' class and revert text of all items
        document.querySelectorAll('#main-nav .nav-item').forEach(link => {
            link.classList.remove('active');
            link.innerHTML = link.dataset.originalHTML; // Restore original text and icon
        });

        // Set 'active' class and transformed text for the clicked item
        item.classList.add('active');
        const iconHTML = item.querySelector('i')?.outerHTML || ''; // Preserve the icon HTML
        const transformedText = transformText(item.dataset.originalText);
        item.innerHTML = `${iconHTML}${transformedText}`; // Set the transformed text with the icon, no space
    });
});
