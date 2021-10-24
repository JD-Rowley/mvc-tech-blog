async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (confirm("Are you sure you want to delete this post?")) {
        const response = await fetch(`/api/posts/${id}`, {
            method: "DELETE"
        });
        if (response.ok) {
                document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);