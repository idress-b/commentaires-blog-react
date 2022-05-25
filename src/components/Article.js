import axios from 'axios';
import React, { useState } from 'react';


const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState('');

    const dateFormater = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
        return newDate;
    }

    const handleDelete = () => {
        axios.delete('http://localhost:3004/articles/' + article.id);
        window.location.reload();
    }

    const handleSubmit = () => {
        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
            updatedDate: Date.now()
        }
        axios.put('http://localhost:3004/articles/' + article.id, data)
            .then(() => setIsEditing(false));

    }

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {dateFormater(article.date)}</em>
            </div>
            {isEditing ? (<textarea
                autofocus
                defaultValue={article.content}
                onChange={(e) => setEditedContent(e.target.value)}
            ></textarea>) :

                (<p>{editedContent ? editedContent : article.content}</p>)

            }
            <div className="btn-container">
                {isEditing ?
                    (<button onClick={() => handleSubmit()}>Valider</button>) :
                    (<button onClick={() => setIsEditing(true)}>Modifier</button>)
                }

                <button
                    onClick={(e) => {
                        if (window.confirm('Voulez-vous vraiemnt supprimer cet article ?')) { handleDelete() }
                    }
                    }>supprimer
                </button>
            </div>
        </div >
    );
};

export default Article;