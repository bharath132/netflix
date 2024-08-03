Movies=[
    {
        movie_name : "Good Night",
        rathing : "7.7/10",
        duraing : "2:22hrs",
        img : "https://survi.in/wp-content/uploads/2023/05/main.jpg"
    },
    {
        movie_name : "Maaveeran",
        rathing : "7.4/10",
        duraing : "2:46hrs",
        img : "https://static.toiimg.com/photo/101326374.cms",
        url : "https://www.youtube.com/watch?v=OOhKsOJ7CRM"
    },    {
        movie_name : "Por Thozhil",
        rathing : "7.7/10",
        duraing : "2:27hrs",
        img : "https://assets-in.bmscdn.com/discovery-catalog/events/et00357691-vqphemajbj-landscape.jpg",
        url : "https://www.youtube.com/watch?v=CfKZUZR1UDk"
    },   
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },    
    {
        movie_name : "Pathu Thala",
        rathing : "6.9/10",
        duraing : "2:39hrs",
        img :"https://static.moviecrow.com/marquee/pathu-thala-among-silambarasan-trs-top-grossing-movies/214345_thumb_665.jpg",
        url : "https://m.youtube.com/watch?v=baOyrPfG9gs"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },
    {
        movie_name : "Pathu Thala",
        rathing : "6.9/10",
        duraing : "2:39hrs",
        img :"https://static.moviecrow.com/marquee/pathu-thala-among-silambarasan-trs-top-grossing-movies/214345_thumb_665.jpg",
        url : "https://m.youtube.com/watch?v=baOyrPfG9gs"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },  
    {
        movie_name : "Custody",
        rathing : "5.9/10",
        duraing : "2:28hrs",
        img :"https://assets-in.bmscdn.com/discovery-catalog/events/et00354148-lsqfqpjxxz-landscape.jpg",
        url : "https://www.youtube.com/watch?v=4DyXyuCk9y8"
    },    
]

function servive_btn()
{
    document.getElementById("service-btn").innerHTML="000-000";

}
document.addEventListener('scroll',()=>{
    const header=document.getElementById('header');
    if (window.scrollY>0)
    {
        header.classList.add("background");
    }
    else
    {
        header.classList.remove("background");
    }
});

function search()
{
   let search = document.getElementById('search').value;
    if (search!=="")
    {
        let result=Movies.filter(function(Movie){
            return Movie.movie_name.toUpperCase().includes(search.toUpperCase())
        })
        document.getElementById('banner').style.display="none"
        dispalymoive(result);
    }
    else 
    {
        document.getElementById('banner').style.display="flex"
        dispalymoive(Movies);
    }
}



function dispalymoive(data)
{
    document.getElementById('movie').innerHTML="";
    for(let i=0;i<data.length;i++)
    {
        let movie_section=document.getElementById('movie');
        let movie=document.createElement('div')
        movie.classList.add('movie')
        movie_section.append(movie)
        let img=document.createElement('img')
        img.src=data[i].img;
        movie.append(img)
        let movie_layer=document.createElement('div')
        movie_layer.classList.add('movie-layer')
        movie.append(movie_layer)
        let h1=document.createElement('h1')
        h1.innerHTML=data[i].movie_name
        movie_layer.append(h1)
        let p1=document.createElement('p')
        p1.innerHTML=data[i].rathing
        let p2=document.createElement('p')
        p2.innerHTML=data[i].duraing
        movie_layer.append(p1,p2)
        let auhcor=document.createElement('a')
        auhcor.href=data[i].url
        auhcor.target="_blank"
        let button =document.createElement('button')
        button.innerHTML=`<i class="fa-solid fa-play"></i>`
        button.classList.add('btn')
        button.id='movie-btn'
        button.onmouseenter=show;
        function show()
        {
            button.innerHTML=`<i class="fa-solid fa-play"></i>Watch Trailer`
        }
        button.onmouseleave=hide;
        function hide()
        {
            button.innerHTML=`<i class="fa-solid fa-play"></i>`
        }
        auhcor.append(button)
        movie_layer.append(auhcor)
        
    }
        
}
dispalymoive(Movies);







