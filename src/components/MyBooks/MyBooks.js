import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import OneBook from '../OneBook/OneBook.js';
import './MyBooks.css';


class MyBooks extends Component {
    state = {

    }
    
    render() {
        // !!! Temo object for design purposes only
        let currentReading = [
            {
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                status: 'currentReading',
                url: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
            },
            {
                title: "Ender's Game",
                author: 'Orson Scott Card',
                status: 'currentReading',
                url: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'

            }
        ];

        let wantRead = [
            {
                title: '1776',
                author: 'David McCullough',
                status: 'wantRead',
                url: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
            },
            {
                title: "Harry Potter and the Sorcerer's Stone",
                author: 'J.K. Rowling',
                status: 'wantRead',
                url: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
            }
        ];

        let read = [
            {
                title: "The Hobbit",
                author: 'J.R.R. Tolkien',
                status: 'read',
                url: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
            },
            {
                title: "Oh, the Olaces You'll Go!",
                author: 'Seuss',
                status: 'read',
                url: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'
            },
            {
                title: "The Adventures of Tom Sawyer",
                author: 'Mark Twain',
                status: 'read',
                url: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
            }
        ];

        let myReads = [currentReading, wantRead, read];
        // ---> !!! The above will changed to being dynamic 


        return (
            <div>
                {/* ---> Current Reading */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <OneBook
                                    url={myReads[0][0].url}
                                    title={myReads[0][0].title}
                                    author={myReads[0][0].author}
                                />
                                <OneBook
                                    url={myReads[0][1].url}
                                    title={myReads[0][1].title}
                                    author={myReads[0][1].author}
                                />
                            </li>
                        </ol>
                    </div>
                </div>

                {/* ---> Wanted Reading */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <OneBook
                                    url={myReads[1][0].url}
                                    title={myReads[1][0].title}
                                    author={myReads[1][0].author}
                                />
                                <OneBook
                                    url={myReads[1][1].url}
                                    title={myReads[1][1].title}
                                    author={myReads[1][1].author}
                                />
                            </li>
                        </ol>
                    </div>
                </div>

                {/* ---> Alredy Read */}
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <OneBook
                                    url={myReads[2][0].url}
                                    title={myReads[2][0].title}
                                    author={myReads[2][0].author}
                                />
                                <OneBook
                                    url={myReads[2][1].url}
                                    title={myReads[2][1].title}
                                    author={myReads[2][1].author}
                                />
                                <OneBook
                                    url={myReads[2][2].url}
                                    title={myReads[2][2].title}
                                    author={myReads[2][2].author}
                                />
                            </li>
                        </ol>
                    </div>
                </div>
            {/* ---> End of wrapper */}
            </div>
        )
    }
};

export default MyBooks;