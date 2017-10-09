#!/usr/bin/ruby

module SequenceFrequency
  extend self
  @text = ""

  def run
    if !$stdin.tty?
      @text << $stdin.read
    elsif ARGV.length > 0
      ARGV.each { |path| @text << File.read(path) }
    else
      puts "Error requires stdin or args"
    end

    process
  end

  def process
    words = @text.split(/\W+/)
    freq  = words.each_with_object(Hash.new(0)).with_index do |(word, accum), idx|
      sequence = words[idx..idx+2].map(&:downcase)
      accum[sequence] += 1 if sequence.length == 3
      accum
    end

    ordered = freq.sort { |a,b| b.last <=> a.last }
    ordered.take(100).each { |seq| puts seq.reverse * ' ' }
  end
end

SequenceFrequency.run
