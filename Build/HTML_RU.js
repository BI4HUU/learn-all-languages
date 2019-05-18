[{
    slide: {
        see: [{
            html: HTML_RU_code1
        }],
        time: 4000,
        globalStyle: '.attribute_name{color: #8ef}.tag{color: #27e;}.attribute_value{color: #f06500;}'
    }
}, {
    slide: {
        see: [{
            col: [{
                line: [{
                    'h2 text': 'HTML - (HyperText Markup Language) - Язык гипертекстовой разметки'
                }]
            }, {
                line: [{
                    text: ' Является стандартным языком разметки для создания веб-страниц и веб-приложений. С помощью каскадных таблиц стилей (CSS) и JavaScript (JS) он образует триаду краеугольных технологий для World Wide Web.'
                }]
            }]
        }],
        voice: 'HTML_RU_html',
        time: 8000
    }
},
//   \/ HELLO WORLD
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h2 text': 'Hello World'
                }]
            }, {
                line: [{
                    text: '	В редакторе текста или кода (Sublime Text, Visual Studio Code ...) нажмите "Файл" > "Создать новый файл", напишите код.'
                }]
            }, {
                line: [{
                    html: '<a class="button" href="http://">Open in CodePen</a>'
                }, {
                    html: '<div class="button" onclick="copyCode()" >Copy code</div>'
                }]
            }, {
                line: [{
                    tag: '<html>'
                }]
            }, {
                line: [{
                    tag: '	<head>'
                }]
            }, {
                line: [{
                    tag: '		<title>'
                }, {
                    text: 'title'
                }, {
                    tag: '</title>'
                }]
            }, {
                line: [{
                    tag: '	</head>'
                }]
            }, {
                line: [{
                    tag: '	<body>'
                }]
            }, {
                line: [{
                    tag: '		<div>'
                }, {
                    text: 'Привет мир'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	</body>'
                }]
            }, {
                line: [{
                    tag: '</html>'
                }]
            }, {
                line: [{
                    text: '	Нажмите "Файл" > "Сохранить как...", выберите папку, имя файла - "Hello world.html", нажмите "Сохранить", откройте файл в браузере.'
                }]
            }]
        }],
        voice: 'HTML_EN_Hello_World',
        time: 6000,
        copyCode: HTML_RU_code2
    }
},
//   /\ HELLO WORLD
//   \/ tag, attribute

{
    slide: {
        see: [{
            col: [{
                line: [{
                    text: 'Код состоит из тегов и атрибутов.'
                }]
            }]
        }, {
            'w-100': []
        }, {
            'col code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className"'
                }, {
                    tag: '>'
                }, {
                    text: 'Текст'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    attribute_name: ' checked'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</body>'
                }]
            }]
        }, {
            col: [{
                line: [{
                    comment: 'Где'
                }]
            }, {
                line: [{
                    tag: '<body></body>, <div></div>'
                }, {
                    text: ' - парный тег (контейнер). '
                }]
            }, {
                line: [{
                    tag: '<input>'
                }, {
                    text: ' - одиночный тег.'
                }]
            }, {
                line: [{
                    attribute_name: 'checked'
                }, {
                    text: ' - атрибут.'
                }]
            }, {
                line: [{
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className", '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    text: ' - атрибут со значениям.'
                }]
            }, {
                line: [{
                    text: 'Текст'
                }, {
                    text: ' - текст.'
                }]
            }, {
                line: [{
                    html: '<a class="button" href="http://">Open in CodePen</a>'
                }]
            }]
        }],
        voice: 'HTML_RU_tag_attribute',
        time: 17000
    }
},
//   /\ tag, attribute
//   \/ Типы тегов
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Типы тегов.'
                }]
            }, {
                line: [{
                    text: 'теги верхнего уровня;'
                }]
            }, {
                line: [{
                    text: 'теги заголовка документа;'
                }]
            }, {
                line: [{
                    text: 'блочные элементы;'
                }]
            }, {
                line: [{
                    text: 'строчные элементы;'
                }]
            }, {
                line: [{
                    text: 'списки;'
                }]
            }, {
                line: [{
                    text: 'таблицы;'
                }]
            }, {
                line: [{
                    text: 'фреймы;'
                }]
            }, {
                line: [{
                    text: 'универсальные элементы.'
                }]
            }]
        }],
        voice: 'HTML_RU_tag_type',
        time: 6000
    }
},
//   /\ Типы тегов
//   \/ Теги верхнего уровня
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Теги верхнего уровня'
                }]
            }, {
                line: [{
                    tag: '<html></html>'
                }]
            }, {
                line: [{
                    tag: '<head></head>'
                }]
            }, {
                line: [{
                    tag: '<body></body>'
                }]
            }]
        }],
        time: 6000
    }
},
//   /\ Теги верхнего уровня
//   \/ Теги заголовка документа
// {
//     slide: {
//         see: [{
//             col: [{
//                 line: [{
//                     'h1 text': 'Теги заголовка документа'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<html></html>'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<head></head>'
//                 }]
//             }, {
//                 line: [{
//                     tag: '<body></body>'
//                 }]
//             }]
//         }],
//         time: 6000
//     }
// },
//   /\ Теги заголовка документа

//   \/ Test correctly wrong
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Тести'
                }]
            }, {
                line: [{
                    'text': 'Выберите правыльную разметку'
                }]
            }]
        }, {
            'w-100': []
        }, {
            'col wrong code': [{
                line: [{
                    tag: 'body'
                }]
            }, {
                line: [{
                    tag: '	div '
                }, {
                    attribute_name: 'class='
                }, {
                    attribute_value: '"className"'
                }, {
                    text: 'Текст'
                }, {
                    tag: ' div'
                }]
            }, {
                line: [{
                    tag: '	input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"checkbox"'
                }, {
                    attribute_name: ' checked'
                }]
            }, {
                line: [{
                    tag: 'body'
                }]
            }]
        },{
            'w-100': []
        }, {
            'col correctly code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'id='
                }, {
                    attribute_value: '"idName"'
                }, {
                    tag: '>'
                }, {
                    text: 'Привет'
                }, {
                    tag: '</div>'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"text"'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</body>'
                }]
            }]
        },{
            'w-100': []
        }, {
            'col wrong code': [{
                line: [{
                    tag: '<body>'
                }]
            }, {
                line: [{
                    tag: '	<div '
                }, {
                    attribute_name: 'id='
                }, {
                    attribute_value: '"idName"'
                }, {
                    tag: '>'
                }, {
                    text: 'Привет'
                }]
            }, {
                line: [{
                    tag: '	<input '
                }, {
                    attribute_name: 'type='
                }, {
                    attribute_value: '"text"'
                }, {
                    tag: '>'
                }]
            }, {
                line: [{
                    tag: '</div>'
                }]
            }]
        }],
        time: 12000
    }
},
//   /\ Test

//   \/ Source
{
    slide: {
        see: [{
            col: [{
                line: [{
                    'h1 text': 'Полезные ссылки.'
                }]
            }, {
                line: [{
                    'html': '<a href="http://htmlbook.ru/">"HTML book" - Учебник</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://html5book.ru/">"HTML5 BOOK" - Учебник</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://codebra.ru/">"CODEBRA" - Учебник с практикой</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="www.cyberforum.ru/">"CyberForum" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="https://ru.stackoverflow.com/">"StackOverflow" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://programmersforum.ru/">"Клуб ПРОграммистов" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://forum.vingrad.ru/">"VINGRAD" - Форум</a>'
                }]
            }, {
                line: [{
                    'html': '<a href="http://www.html.by/">"HTML" - Форум</a>'
                }]
            }]
        }],
        time: 3000
    }
}
];

