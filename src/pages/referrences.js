import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const morePage = () => (
  <Layout>
    <h2>Referrences</h2>
    <div>
   		<p>Books</p>
   		<ul>
   			<li>
            <a href='https://www.amazon.com/Obstacle-Way-Timeless-Turning-Triumph-ebook/dp/B00G3L1B8K'>
             The Obstacle is the way</a> 
             By Ryan Holiday. This book have taught me that any problem, any misfortune can be handled 
             properly by the right mindset. The solution is within our perception, actions and grit.
             I highly recommend this book as a must read.
        </li>		
   			<li>
            <a href='https://www.amazon.com/Daily-Stoic-Meditations-Wisdom-Perseverance/dp/0735211736'>
             The Daily Stoic: 366 Meditations on Wisdon, Perseverance and the Art of Living</a>
             by Ryan Holiday and Stephen Hanselman. This book is part of my morning routine, 
             to add a nugget of stoic philosophy everyday.
        </li>
   			<li>
            <a href='http://www.gutenberg.org/ebooks/2680'>
            Meditations</a> 
            by Marcus Aurelius. A lot of significant people have read this book and their recommendations
            are more than enough to refer the book.
        </li>
   		</ul>
   	</div>	
    <div>
   		<p>Other sources</p>
   		<ul>
   			<li>
            <a href='https://tim.blog/2017/07/06/tao-of-seneca/'>
            Tao of Seneca.</a> 
            A life of misfortune turned to a supreme model of ethical foundation. 
            Another great resource.
        </li>
   			<li>
            <a href='https://tim.blog/stoic/'>
            Stoicism Resources and Recommendations.</a>
            Ahh, Timothy Ferriss the great master of none. 
            This guy introduced me first to me not only stoicism but to strecthing 
            the idea of what is humanly possible to achieve. 
            Check out his awesome resources on stoicism and blog.
        </li>
   		</ul>
   	</div>	

    <Link to="/stoicism/public/index.html">back</Link>
    <Link to="/">back to my profile</Link>
  </Layout>
)

export default morePage
