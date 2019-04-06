setTimeout(function () {
  $(document).ready(function () {
    const faqsData = [{
      name: 'Product',
      items: [{
        id: 'product_1',
        title: 'Why does my pen seem to have dried out?',
        content: "It's very important that you put your pen cap on every time you use your pen. After 20+ strokes, shake pen and let sit upside down for a period of time (20-30 minutes) so the wick can soak up more makeup ink."
      }, {
        id: 'product_2',
        title: 'How does this pen work?',
        content: "Our pens come with skin-friendly ink that you apply to your eyebrows through our precision wick. The wick soaks up the ink inside of the pen. If your pen seems to have dried out please shake well and let sit upside down for 30+ minutes. This will allow the pen to soak up ink."
      }, {
        id: 'product_3',
        title: 'What ingredients are used in the product?',
        content: "Product ingredients: Water, Propylene Glycol, Ethylalcohol, Acrylic acid, Diacetone acrylamide AMP salt, Polyethylene glycol - 32, Phenoxyethanol, Methyl hydroxybenzoate, Polysorbate - 80, Propyl 4-hydroxybenzoate, Ethyl hydroxybenzoate, EDTA - disodium, CI77491 CI77492 CI77499 CI77891."
      }]
    },
    {
      name: 'Support and Returns',
      items: [{
        id: 'support_1',
        title: 'What is your return policy?',
        content: 'We accept returns within 10 calendar days of delivery. If you initiate your return within 10 days of delivery, upon receipt of the returned product, we will process your refund equal 100% of the purchase price minus any shipping charges within 2 business days. Please note depending on your bank or credit card company, it may take up to 7 business days for funds to appear on your account.'
      },
      {
        id: 'support_2',
        title: 'How do I contact support?',
        content: 'If you need to contact us for any reason please email us here: admin@tintbrows.com'
      }
      ]
    },
    {
      name: 'Shipping',
      items: [{
        id: 'shipping_1',
        title: 'Where do you ship from?',
        content: "We ship from multiple warehouses around the world depending on where you live. We process your order and ship within two (2) days. Our products are nicely shipped with quality packaging to ensure they don't get damaged in the mail. "
      },
      {
        id: 'shipping_2',
        title: 'Do you ship WorldWide?',
        content: 'Yes! We are proud to serve all customers worldwide and all prices are in USD.',
      },
      {
        id: 'shipping_3',
        title: 'What is the average shipping time?',
        content: 'We fulfill and ship your order within 2 business days. All delivery averages below are based on calendar days from the day your package ship.',
        extraHtml: `<table style="max-width: 480px; margin-top: 16px;">
                  <tr><td>USA and Canada</td> <td>8 - 14 days</td></tr>
                  <tr><td>Asia</td> <td>3 - 7 days</td></tr>
                  <tr><td>Australia</td> <td>5 - 12 days</td></tr>
                  <tr><td>Europe</td> <td>3 - 7 days</td></tr>
                  <tr><td>Rest of World</td> <td>8 - 18 days</td></tr>
                </table>`
      }
      ]
    }
    ]

    $(document).on('click', '.faq-category, .faq-item, .faq-item-content', function (e) {
      e.stopPropagation()
      if ($(this).hasClass('faq-item-content')) return
      if ($(this).hasClass('expand')) {
        $(this).removeClass('expand').addClass('collapse')
      } else {
        $(this).removeClass('collapse').addClass('expand')
      }
    })

    $('#search-box').keyup(function () {
      const inputValue = $('#search-box').val().trim().toLowerCase()

      const suggestions = faqsData.reduce((res, group) => {
        const data = group.items.reduce((res1, item) => {
          if (item.title.toLowerCase().indexOf(inputValue) >= 0) res1.push(item)
          else if (item.content.toLowerCase().indexOf(inputValue) >= 0) res1.push(item)

          return res1
        }, [])

        return res.concat(data)
      }, []).slice(0, 5)

      $('.search-suggestions').empty()
      if (suggestions.length === 0) $('.search-suggestions').addClass('hide')
      else $('.search-suggestions').removeClass('hide')

      const suggestionsElem = $('.search-suggestions')
      suggestions.forEach(suggestion => {
        $('<div/>', {
          name: suggestion.id,
          class: 'suggestion-item',
          text: suggestion.title
        }).appendTo(suggestionsElem)
      })
    })

    $(document).on('click', '.suggestion-item', function () {
      $('.search-suggestions').empty()
      $('.search-suggestions').addClass('hide')

      const item = $('#' + $(this).attr('name'))
      if (!item) return

      item.parent('.faq-category').removeClass('collapse').addClass('expand')
      item.removeClass('collapse').addClass('expand')

      const position = item.offset().top - 50;
      $('html, body').animate({
        scrollTop: position
      }, 500)
    })

    $(document).click(function (event) {
      if (!$(event.target).closest('.suggestion-item').length) {
        $('.search-suggestions').empty()
        $('.search-suggestions').addClass('hide')
      }
    });

    function setupFaqs() {
      const elem = $('.faqs .content')
      faqsData.forEach(faq => {
        const faqElem = $('<div/>', {
          class: 'faq-category expand',
        })
          .append($('<div/>', {
            class: 'faq-category-title',
            text: faq.name
          }))

        faq.items.forEach(item => {
          faqElem.append(
            $('<div/>', {
              id: item.id,
              class: 'faq-item collapsible expand'
            })
              .append($('<div/>', {
                class: 'faq-item-title',
                text: item.title
              }).prepend('<i class="fa fa-angle-right" />'))
              .append($('<div/>', {
                class: 'faq-item-content collapsible',
                text: item.content
              }).append(item.extraHtml))
          )
        })

        elem.append(faqElem)
      })
    }
    setupFaqs()
  })

}, 500)
