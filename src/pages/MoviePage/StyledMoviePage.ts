import styled from 'styled-components';

export const StyledMoviePage = styled.div`
    color: #ffffff;

    header {
        .profileDiv {
            display: flex;
            align-items: center;
            gap: 30px;
            div {
                display: flex;
                align-items: center;
                gap: 10px;
                img {
                    width: 40px;
                    border-radius: 50%;
                    transition: 0.4s;
                }
                img:hover {
                    position: relative;
                    scale: 1.2;
                }
                a {
                    color: #ffffff;
                    font-size: 18px;
                }
            }
            a {
                color: #ffffff;
                font-size: 18px;
            }
            a:hover {
                text-decoration: underline;
            }
        }
    }
    main {
        margin-top: 120px;
        background-color: #000000;
        width: 100%;
        height: 100%;
        padding: 0px 15px;
        .container {
            padding: 50px 15px;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                180deg,
                rgba(190, 107, 0, 0.59) -6.47%,
                rgba(255, 52, 0, 0.4602) 93.53%
            );
            margin: 0 auto;
            max-width: 813px;
        }
    }

    @media (min-width: 768px) {
        form {
            .postCommentDiv {
                align-items: center;
                flex-direction: row !important;
                gap: 20px;
                height: 120px;
                textarea {
                    margin-bottom: 0px !important;
                }
            }
        }
    }
`;
